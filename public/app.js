class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.handleImg = this.handleImg.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleReleaseTitle = this.handleReleaseTitle.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleAnv = this.handleAnv.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleCatno = this.handleCatno.bind(this);
    this.handleBarcode = this.handleBarcode.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImg(event) {
   this.setState({img: event.target.value});
  }

  handleType(event) {
    this.setState({type: event.target.value});
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleReleaseTitle(event) {
    this.setState({release_title: event.target.value});
  }

  handleCredit(event) {
    this.setState({credit: event.target.value});
  }

  handleArtist(event) {
    this.setState({artist: event.target.value});
  }

  handleAnv(event) {
    this.setState({anv: event.target.value});
  }

  handleLabel(event) {
    this.setState({label: event.target.value});
  }

  handleGenre(event) {
    this.setState({genre: event.target.value});
  }

  handleStyle(event) {
    this.setState({style: event.target.value});
  }

  handleCountry(event) {
    this.setState({country: event.target.value});
  }

  handleYear(event) {
    this.setState({year: event.target.value});
  }

  handleFormat(event) {
    this.setState({format: event.target.value});
  }

  handleCatno(event) {
    this.setState({catno: event.target.value});
  }

  handleBarcode(event) {
    this.setState({barcode: event.target.value});
  }

  handleTrack(event) {
    this.setState({track: event.target.value});
  }

  handlePrice(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit = event => {
    console.log(this.state)
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

  render() {
    return (
      <div className="requesting">
      <h1>Request a Record</h1>
      <div className="requests">
        <details>
      <form onSubmit={this.handleSubmit}>
        <label>
          Image:<br/>
          <input type="text" onChange={this.handleImg} />
        </label>
        <label>
          Type:<br/>
          <input type="text" onChange={this.handleType} />
        </label>
        <label>
          Title:<br/>
          <input type="text" onChange={this.handleTitle} />
        </label>
        <label>
          Release Title:<br/>
          <input type="text" onChange={this.handleReleaseTitle} />
        </label>
        <label>
          Credit:<br/>
          <input type="text" onChange={this.handleCredit} />
        </label>
        <label>
          Artist:<br/>
          <input type="text" onChange={this.handleArtist} />
        </label>
        <label>
          Alternate Artist Name:
          <input type="text" onChange={this.handleAnv} />
        </label>
        <label>
          Label:
          <input type="text" onChange={this.handleLabel} />
        </label>
        <label>
          Genre:
          <input type="text" onChange={this.handleGenre} />
        </label>
        <label>
          Style:
          <input type="text" onChange={this.handleStyle} />
        </label>
        <label>
          Country:
          <input type="text" onChange={this.handleCountry} />
        </label>
        <label>
          Year:
          <input type="text" onChange={this.handleYear} />
        </label>
        <label>
          Format:
          <input type="text" onChange={this.handleFormat} />
        </label>
        <label>
          Catno:
          <input type="text" onChange={this.handleCatno} />
        </label>
        <label>
          Tracks:
          <input type="text" onChange={this.handleTrack} />
        </label>
        <label>
          Price:
          <input type="text" onChange={this.handlePrice} />
        </label>
        <input className="button" type="submit" value="Submit" />
        
      </form>
      </details>
      </div>
      </div>
    );
  }
}

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
    this.handleImg = this.handleImg.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleReleaseTitle = this.handleReleaseTitle.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleArtist = this.handleArtist.bind(this);
    this.handleAnv = this.handleAnv.bind(this);
    this.handleLabel = this.handleLabel.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleCatno = this.handleCatno.bind(this);
    this.handleBarcode = this.handleBarcode.bind(this);
    this.handleTrack = this.handleTrack.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this)
  }
  componentDidMount() {
    fetch('/vinyls')
      .then(response => response.json())
      .then(vinyls => this.setState({vinyls}))
  }

  handleImg(event) {
    this.setState({img: event.target.value});
   }
 
   handleType(event) {
     this.setState({type: event.target.value});
   }
 
   handleTitle(event) {
     this.setState({title: event.target.value});
   }
 
   handleReleaseTitle(event) {
     this.setState({release_title: event.target.value});
   }
 
   handleCredit(event) {
     this.setState({credit: event.target.value});
   }
 
   handleArtist(event) {
     this.setState({artist: event.target.value});
   }
 
   handleAnv(event) {
     this.setState({anv: event.target.value});
   }
 
   handleLabel(event) {
     this.setState({label: event.target.value});
   }
 
   handleGenre(event) {
     this.setState({genre: event.target.value});
   }
 
   handleStyle(event) {
     this.setState({style: event.target.value});
   }
 
   handleCountry(event) {
     this.setState({country: event.target.value});
   }
 
   handleYear(event) {
     this.setState({year: event.target.value});
   }
 
   handleFormat(event) {
     this.setState({format: event.target.value});
   }
 
   handleCatno(event) {
     this.setState({catno: event.target.value});
   }
 
   handleBarcode(event) {
     this.setState({barcode: event.target.value});
   }
 
   handleTrack(event) {
     this.setState({track: event.target.value});
   }
 
   handlePrice(event) {
     this.setState({price: event.target.value});
   }
 
   handleSubmit = event => {
    console.log(this.state)
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

                            <details><summary>Edit this vinyl</summary>
                              <form onSubmit={this.updateVinyl} id={vinyl.id}>
                                  <label htmlFor="img">Image</label>
                                  <br />
                                  <input type="text" id="img" onChange={this.handleImg} />
                                  <br />
                                  <label htmlFor="type">Type</label>
                                  <br />
                                  <input type="text" id="type" onChange={this.handleType} />
                                  <br />
                                  <label htmlFor="title">Title</label>
                                  <br />
                                  <input type="text" id="title" onChange={this.handleTitle} />
                                  <br />
                                  <label htmlFor="release_title">Release Title</label>
                                  <br />
                                  <input type="text" id="release_title" onChange={this.handleReleaseTitle} />
                                  <br />
                                  <label htmlFor="credit">Credit</label>
                                  <br />
                                  <input type="text" id="credit" onChange={this.handleCredit} />
                                  <br />
                                  <label htmlFor="artist">Artist</label>
                                  <br />
                                  <input type="text" id="artist" onChange={this.handleArtist} />
                                  <br />
                                  <label htmlFor="anv">Alternate Artist Name</label>
                                  <br />
                                  <input type="text" id="anv" onChange={this.handleAnv} />
                                  <br />
                                  <label htmlFor="label">Label</label>
                                  <br />
                                  <input type="text" id="label" onChange={this.handleLabel} />
                                  <br />
                                  <label htmlFor="genre">Genre</label>
                                  <br />
                                  <input type="text" id="genre" onChange={this.handleGenre} />
                                  <br />
                                  <label htmlFor="style">Style</label>
                                  <br />
                                  <input type="text" id="style" onChange={this.handleStyle} />
                                  <br />
                                  <label htmlFor="country">Country</label>
                                  <br />
                                  <input type="text" id="country" onChange={this.handleCountry} />
                                  <br />
                                  <label htmlFor="year">Year</label>
                                  <br />
                                  <input type="text" id="year" onChange={this.handleYear} />
                                  <br />
                                  <label htmlFor="format">Format</label>
                                  <br />
                                  <input type="text" id="format" onChange={this.handleFormat} />
                                  <br />
                                  <label htmlFor="catno">Catno</label>
                                  <br />
                                  <input type="text" id="catno" onChange={this.handleCatno} />
                                  <br />
                                  <label htmlFor="barcode">Barcode</label>
                                  <br />
                                  <input type="text" id="barcode" onChange={this.handleBarcode} />
                                  <br />
                                  <label htmlFor="track">Tracks</label>
                                  <br />
                                  <input type="text" id="track" onChange={this.handleTrack} />
                                  <br />
                                  <label htmlFor="price">Price</label>
                                  <br />
                                  <input type="text" id="price" onChange={this.handlePrice} />
                                  <br />
                                  <input type="submit" value="Update Vinyl" />
                              </form>
                            </details>                          

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
        <Requests></Requests> 
        <Picks></Picks>             
        </div>
      )
    }
}
 
        

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)