import React from "react";
import { Table, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function AccountTable({ data, onEdit }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Date</th>
            <th className="text-center">Entry Type</th>
            <th className="text-center">Amount</th>
            <th className="text-center">Description</th>
            <th className="text-center">Category</th>
            <th className="text-center">Payment Method</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td className="text-center">
                <Form.Check reverse name="group1" id={`checkbox-${index}`} />
              </td>
              <td className="text-center">{new Date(item.date).toLocaleDateString()}</td>
              <td className="text-center">{item.entryType}</td>
              <td className="text-center">{item.amount}</td>
              <td className="text-center">{item.description}</td>
              <td className="text-center">{item.category}</td>
              <td className="text-center">{item.paymentMethod}</td>
              <td className="text-center">
                <Button variant="primary" size="sm" onClick={() => onEdit(item)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AccountTable;
