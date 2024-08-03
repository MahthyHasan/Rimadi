import React from "react";
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function ExpenseTable({ data }) {
	return (
		<div>
			<div>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Deatail</th>
							<th>Debit</th>
							<th>Credit</th>
							<th>Balance</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<td>
									<Form.Check reverse name="group1" id={index + 1} />
								</td>
								<td>{item.deatail}</td>
								<td>{item.debit}</td>
								<td>{item.credit}</td>
                                <td>{item.balance}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default ExpenseTable;
