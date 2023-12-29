import { Button, Modal,Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import StarRating from './StarRating';

function AddReview() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add Review</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>       
        
        <Card className="max-w-auto">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="Nickname" value="Nickname" />
          </div>
          <TextInput id="Nickname" type="test" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="review" value="review" />
          </div>
          <TextInput id="review" type="test" required />
        </div>
        <div className="flex items-center gap-2">
         <StarRating/>
        </div>       
      
      <Modal.Footer>
          <Button onClick={() => setOpenModal(false)} type="submit">Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
        </form>
    </Card>        
      </Modal>
    </>
  );
}

export default AddReview
