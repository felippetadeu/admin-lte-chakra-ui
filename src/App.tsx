import './App.css';
import Sidebar from './components/sidebar';
import Wrapper from './components/wrapper';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Page from './components/page';
import Dropdown from './components/dropdown';
import Badge from './components/badge';

function App() {

  const toggleBodyClassName = (className: string) => {
    document.body.classList.contains(className) ?
    document.body.classList.add(className) :
    document.body.classList.remove(className);
  }

  return (
    <Wrapper>
      <Navbar.Navbar>

        <Navbar.Navigation>
          <Navbar.Item>
            <Navbar.Link data-widget="pushmenu" href="#" role="button" onClick={() => toggleBodyClassName('sidebar-collapse')}><i className="fas fa-bars"></i></Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link>Home</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item dropdown={true}>
            <Navbar.Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Help
            </Navbar.Link>
            <Dropdown.Menu>
              <Dropdown.Item>FAQ</Dropdown.Item>
              <Dropdown.Item>Support</Dropdown.Item>
            </Dropdown.Menu>
          </Navbar.Item>
        </Navbar.Navigation>



        <Navbar.Navigation className="navbar-nav ml-auto">
          <Navbar.Item>
            <Navbar.Link data-widget="pushmenu" href="#" role="button" onClick={() => toggleBodyClassName('sidebar-collapse')}><i className="fas fa-bars"></i></Navbar.Link>
          </Navbar.Item>
          <Navbar.Item dropdown={true}>
            <Navbar.Link className="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="far fa-comments"></i> <Badge.Badge className='navbar-badge' badgeStyle='badge-info'>3</Badge.Badge>
            </Navbar.Link>
            <Dropdown.Menu side=' dropdown-menu-right'>
              <Dropdown.Header>Teste</Dropdown.Header>
              <Dropdown.Item>FAQ</Dropdown.Item>
              <Dropdown.Item>Support</Dropdown.Item>
              <Dropdown.Divider></Dropdown.Divider>
              <Dropdown.Item>Olá</Dropdown.Item>
            </Dropdown.Menu>
          </Navbar.Item>
        </Navbar.Navigation>

      </Navbar.Navbar>
      <Sidebar></Sidebar>
      <Page></Page>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
