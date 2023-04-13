import { Alert } from "antd";

const PageTwo = (props) => {
    return (
      <>
      <div style={{backgroundColor: 'rgb(146 156 244)'}}>        
        <h1 style={{textAlign: 'center'}}>This is page two</h1>
      </div>
      <br />
      <br />
      <Alert message="Success Tips" type="success" showIcon />
      </>
    );
  };
  
  export default PageTwo;
  