import { useState } from "react";
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );
  const modal = <Modal onClose={handleClose} actionBar={ actionBar }>
    <p>Here is an important message</p>
  </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis augue nunc, ac porta lectus pulvinar ut. Nullam condimentum enim ut tellus commodo, non tristique enim dapibus. Nulla ac ipsum euismod justo sagittis bibendum ac id quam. Curabitur nec diam in ipsum tincidunt ullamcorper. Nam viverra sed tortor in vehicula. Aenean facilisis, dolor eget porta pellentesque, mauris tellus efficitur dolor, vel porta sem enim ac nibh. Integer ut libero dolor. Mauris lacus est, tempus vel dictum eu, tempus et elit.
      </p>
    </div>
  );
}

export default ModalPage;
