import {Table} from "react-bootstrap";

export default function CoinsTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={coin.id}>
            <td>{coin.rank}</td>
            <td>
                <img
                    src={coin.icon}
                    alt={coin.name}
                    style={{ width: 20, height: 20, marginRight: 10 }}
                />
                {coin.name}
            </td>
            <td>{coin.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}