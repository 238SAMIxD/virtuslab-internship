import '../css/Modal.css';

function close( e ) {
    const modal = document.querySelector(".modal");
    
    if( !e.target.className.includes("modal") ) return;

    document.body.style.overflowY = "scroll";
    modal.style.display = "none";

    document.querySelectorAll(".modal .container-pokemon__data-type").forEach( element => element.remove() );
}

function Modal() {
    return (
        <div className="modal" onClick={close}>
            <div className="container-pokemon">
                <div className="modal-close" onClick={close}>X</div>
                <div className="container-pokemon__background"></div>
                <div className="container-pokemon__sprite"></div>
                <div className="container-pokemon__data">
                    <span className="container-pokemon__data-name"></span>
                </div>
                <div className="container-pokemon__details">
                    <div className="container-pokemon__details-weight"></div>
                    <div className="container-pokemon__details-height"></div>
                </div>
            </div>
        </div>
    );
}

export default Modal;