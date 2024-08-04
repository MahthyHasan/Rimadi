import React from "react";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BillTable({ data }) {
  return (
    <div>
			<div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Deatail</th>
							<th>Date</th>
							<th>Time</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<td>
									<Form.Check reverse name="group1" id={index + 1} />
								</td>
								<td>{item.deatail}</td>
								<td>{item.date}</td>
								<td>{item.time}</td>
                                <td>{item.cost}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
  )
}

export default BillTable
