import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function LoginForm() {

	return (
		<Container>
			<Form>
				<Form.Group controlId="token">
					<Form.Control type="text" placeholder="Token" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
  				</Button>
			</Form>
		</Container>
	);
}
