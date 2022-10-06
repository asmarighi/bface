import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);
// import React from 'react';
// import { Modal, useMantineTheme } from '@mantine/core';

// function ProfileModal({ modalOpened, setModalOpened }) {
//   const theme = useMantineTheme();

//   return (
//     <Modal
//       overlayColor={
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[9]
//           : theme.colors.gray[2]
//       }
//       overlayOpacity={0.55}
//       overlayBlur={3}
//       size="55%"
//       opened={modalOpened}
//       onClose={() => setModalOpened(false)}
//     >
//       <form className="infoForm">
//         <h3>Your info</h3>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="FirstName"
//             placeholder="First Name"
//           />

//           <input
//             type="text"
//             className="infoInput"
//             name="LastName"
//             placeholder="Last Name"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="worksAT"
//             placeholder="Works at"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             name="livesIN"
//             placeholder="LIves in"
//           />

//           <input
//             type="text"
//             className="infoInput"
//             name="Country"
//             placeholder="Country"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             className="infoInput"
//             placeholder="RelationShip Status"
//           />
//         </div>


//         <div>
//             Profile Image 
//             <input type="file" name='profileImg'/>
//             Cover Image
//             <input type="file" name="coverImg" />
//         </div>

//         <button className="button infoButton">Update</button>
//       </form>
//     </Modal>
//   );
// }

// export default ProfileModal;
