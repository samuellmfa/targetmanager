import Layout from "../../../components/layout"
import DepartmentsList from "../../../components/departmentsList"
import { getCookie } from "cookies-next";
import Link from "next/link"
import useSWR from "swr";
import { useRouter } from "next/router";
import { Chart } from "react-google-charts";
import Titlebar from "../component/Menu/titlebar";
import _footer from "../component/Footer/footer";
export const chart_data = [];

export const options = {
  allowHtml: true,
};
export default  function Employee( {username, created} )
{
    const router = useRouter();
    const { msg } = router.query
    const { data, isLoading } = useSWR("/api/departments");
    console.log("data :",data)
    if (!data) return;
   
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    data.map((dept) => chart_data.push([dept.Level_name, dept.Parent_department, ""]));
    return (
        
      <Layout pageTitle="employee">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Titlebar />

    <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Chart
                chartType="OrgChart"
                data={chart_data}
                options={options}
                width="100%"
                height="100%"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form
                 action="/api/profiles/employee" method="POST"
                className="border border-primary rounded p-4"
              >
                <div>
                  {msg ? (
                    <h3 className="red">{msg}</h3>
                  ) : (
                    <> Add Employee</>
                  )}
                </div>

                <div className="divider d-flex align-items-center my-4"></div>

                <div className="form-outline mb-4">
                  <input
                    minLength="3"
                    name="name"
                    id="name"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Employee Full Name"
                    required
                  />
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="text"
                    name="Title"
                    id="Title"
                    className="form-control form-control-lg"
                    placeholder="Job Title or Position"
                    minLength="5"
                    required
                  />
                </div>
                <br />
                <br></br>
                   
               
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <label
                      className="form-check-label"
                      htmlFor="Parent_department"
                    >
                      Department:
                      <select id="Department" name="Department">
          {data.map((dept) => (
            <option value={dept.Level_name} key={dept._id}>
              {dept.Level_name}
          </option>
        ))}
          </select>
                    </label>
                  </div>
                </div>
                <br />
                <label htmlFor="IsHead"  className="form-check-label">Is the Head of the department</label> <input type="checkbox" name="IsHead" id="IsHead" value="" className="form-check-input me-2"></input><br></br><br></br>

                <div className="form-outline mb-4">
                <input  minLength="3" name="username" id="username" type="text"  className="form-control form-control-lg" placeholder="Enter a valid email address" required />
                <label className="form-label" htmlFor="username">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="password" className="form-control form-control-lg"
                  placeholder="Enter password"   minLength="5" name="password" required/>
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="passwordagain" className="form-control form-control-lg"
                  placeholder="Confirm Password"   minLength="5" name="passwordagain" required/>
                <label className="form-label" htmlFor="passwordagain">Confirm Password</label>
              </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>












    <_footer />
    </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie("username", { req, res });
    var Organization = getCookie("Organization", { req, res });
    var IsEmployee = getCookie("IsEmployee", { req, res });
    console.log(Organization,username,IsEmployee)
    // if (username != undefined){
    //     return {
    //         redirect: {
    //             permanent: false,
    //             destination: "/profile/employee"
    //         }
    //     }
    // }
    return { props: {username:false} };
};