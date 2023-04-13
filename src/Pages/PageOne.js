import axios from "axios"
import { useEffect, useState } from "react"
import { Skeleton, Table } from "antd"

const PageOne = (props) => {
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios
      .get("/account/react_page_api")
      .then((res) => {
        setData(res.data.data)
        setColumns(res.data.columns)
      })
      .catch((err) => {
        console.log("*err", err)
      })
      .finally(() => {
        setTimeout(() => {
          setLoader(false)
        }, 1000)
      })
  }, [])

  return (
    <>
      <div style={{ backgroundColor: "#ffb3b3" }}>
        <h1 style={{ textAlign: "center" }}>This is page one</h1>
      </div>
      <br />
      <br />
      {loader ? (
        <Skeleton
          title={false}
          active={true}
          paragraph={{ rows: 20, width: "100%" }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 'max-content',
          }}
        />
      )}
    </>
  )
}

export default PageOne
