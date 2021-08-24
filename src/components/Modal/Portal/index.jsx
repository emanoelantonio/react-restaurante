import ReactDom from "react-dom";

const PortalModal = ({ children }) => {
    const portal = document.getElementById('modal-root');
    
    return ReactDom.createPortal(children, portal);
};

export default PortalModal;