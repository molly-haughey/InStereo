
//import ModalContainer from './modal';
/** Modal **/
const Modal = ({ children, closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }
  
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {children}
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}

// Modal.propTypes = {
//   closeModal: React.PropTypes.func.isRequired,
//   modalState: React.PropTypes.bool.isRequired,
//   title: React.PropTypes.string
// }

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalState: false,
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  
  }
  deleteVinyl = (event) => {
    console.log(cart);
    console.log(cart[0]);
    const vinylId = cart[0].id;
    console.log(vinylId); 
    
    axios
      .delete('/vinyls/' + vinylId)
      .then(response => this.setState({vinyls: response.data}))
  }
  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }
  
  render() {
    return(
      <section className="section">
        <div className="container">
          
          <div className="header-2">
            <a onClick={this.toggleModal}> 🛒  View Cart</a>
          </div>
         
          <Modal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState} 
            title="Cart Items"
          >
            <ul>            
              {cart.map((cartObject) => <li>{cartObject.title}</li> )}
            </ul>

            <div>Total: ${getPriceTotal()}</div>
            <button onClick={this.deleteVinyl}>Buy</button>



          </Modal>
        </div>
      </section>
    );
  }
}     
    


class Picks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      vinyls: [],
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentDidMount() {
    fetch('/vinyls')
      .then(response => response.json())
      .then(vinyls => this.setState({vinyls}))
  }
  
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/vinyls', this.state)
      .then(response => this.setState(
        { img: '',
          type: '',
          title: '',
          release_title: '',
          credit: '',
          artist: '',
          anv: '',
          label: '',
          genre: '',
          style: '',
          country: '',
          year: '',
          format: '',
          catno: '',
          barcode: '',
          track: '',
          price: '',
          vinyls: response.data
        })
      )
  }
  updateVinyl = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('/vinyls/' + id, this.state)
      .then(response => {
        this.setState({
          vinyls: response.data,
          img: '',
          type: '',
          title: '',
          release_title: '',
          credit: '',
          artist: '',
          anv: '',
          label: '',
          genre: '',
          style: '',
          country: '',
          year: '',
          format: '',
          catno: '',
          barcode: '',
          track: '',
          price: ''
        })
      })
  }
  handleToggle(VinylDescriptionId) {
    //console.log('e of handle toggle', e);
    //console.log(this);
    //this.setState({ isVisible: !this.state.isVisible,
    //id: e.target.value});
    //id: 
    const description = document.getElementById(VinylDescriptionId)
    description.classList.remove('is-hidden')
  };
  
    render = () => { 
      //const isVisible = this.state.isVisible;
        return (
            <div>
              <h1>Staff Picks</h1> 
            <div>
              {this.state.vinyls.map((vinyl, index) => {
                return (
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                      
                      <button onClick={e => this.handleToggle(vinyl.anv)}>
                        <img value={this.state.id} className="is-clickable" src={vinyl.img}/>
                      </button>
                      
                      <br/></figure>
                      <div className="card-content">
                        <div className="content">
                          <b> {vinyl.title}</b> <br/> 
                          <div id={vinyl.anv} className="is-hidden">
                
                            <b>Vinyl Type:</b> {vinyl.type} <br/> <b>Album Title:</b> {vinyl.release_title} <br/><b>Credits:</b> {vinyl.credit} <br/> <b>Artist:</b> {vinyl.artist} <br/> <b>Alternate Artist Names: </b> {vinyl.anv} <br/> <b>Label:</b> {vinyl.label} <br/> <b>Genre:</b> {vinyl.genre} <br/> <b>Style:</b> {vinyl.style} <br/> <b>Country:</b> {vinyl.country} <br/> <b>Year:</b> {vinyl.year} <br/> <b>Format:</b> {vinyl.format} <br/> <b>Catno:</b> {vinyl.catno} <br/> <b>Barcode:</b> {vinyl.barcode} <br/> <b>Tracks:</b> {vinyl.track} <br/> <b>Price:</b> ${vinyl.price}<br/>

                            <CartButton serialNumber={vinyl.id} title={vinyl.title} price={vinyl.price}></CartButton>                            

                          </div>
                        </div>
                     </div>
                    </div>
                  </div>  
                )
              }
              )
              }
              </div>
              
              </div>
        )
      }
    }

              
// class Login extends React.Component {
//   HasAccessToRouter = () => {
//     const history = useHistory(); 
//     customAuthHandler = () => {
//       history.push('/login');
//     };
//   }
//   render = () => {
//   }
        
let cart = [];

function getPriceTotal(){
  let priceTotal = 0;
  for (var c_i=0; c_i<cart.length; c_i++) {
    priceTotal += cart[c_i].price;
  }
  return priceTotal;
}


// class Cart {
//   constructor(props) {
//   }
// }

class CartButton extends React.Component {

    constructor(props){
      super(props);
      let serialNumber = props.serialNumber;
      let title = props.title;
      let price = props.price;
    }

    render = () => {

      return(
        <button onClick={e => addToCart(this.props.serialNumber, this.props.title, this.props.price)}> + Add To Cart</button>
      );

      function addToCart(serialNumber, title, price){
        alert(`Added ${title} to cart`)
        const cartItem = {
          id: serialNumber,
          title : title,
          price : price
        }
        cart.push(cartItem);
      }
    }

}      
    

class Header extends React.Component {
    render = () => {
        return(
         <div className="header-0">
            <div className="header-1">
            </div> 
            </div>
        )
      }
}


class App extends React.Component {
        state = {
            vinyls:{},
            purchasedId: 0
        }
    

    componentDidMount = () => {
        axios
        .get('/vinyls')
        .then((response) => {
          this.setState({
            vinyls: response.data
          })
        })
    }

    render = () => {
      return(<div>        
        <ModalContainer></ModalContainer>
        <Header></Header>
        {/* <Vinyl></Vinyl>   */}
        <Picks></Picks>      
        </div>
      )
    }
}
 
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)