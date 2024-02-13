import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";
export function loader(){
  const clients = [
    {
        id: 1,
        name: 'John',
        phone: 102013313,
        email: "juan@react.com",
        company: 'React coders'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@react.com",
        company: 'React coders'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@react.com",
        company: 'React coders'
    },
    {
        id: 4,
        name: 'Micheal',
        phone: 319381983,
        email: "miguel@react.com",
        company: 'React coders'
    },
    {
        id: 5,
        name: 'Peter',
        phone: 1398198938,
        email: "pedro@react.com",
        company: 'React coders'
    },
];
  return clients
}

function Index () {

  const clients = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3">Manage your clients</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2 ">Client </th>
              <th className="p-2 ">Contact </th>
              <th className="p-2 ">Action </th>
            </tr>
          </thead>
          <tbody>
              {clients.map( client => (
                <Client 
                  client = {client}
                  key = {client.id}
                />
              ))}
          </tbody>
          
        </table>
      ) : (
        <p className="text-center mt-10">Nothing to show around here...</p>
      )}
    </>
  )
}

export default Index