// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Services
import api from '../services/api';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
  background-color: #000;
`;

const Aside = styled.aside`
  padding: 1.5rem;
  width: 10%;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  letter-spacing: 8px;
  line-height: 25px;
`;

const ContainerItems = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.div`
`;

const Figure = styled.figure`
`;

const FigureTexts = styled.span`
  display: flex;
`;

const Image = styled.img`
`;

const Text = styled.p`
  margin-left: ${(props) => props.marginL && '1rem'};
  color: ${(props) => props.red ? '#64ffda' : '#fff'};
  letter-spacing: 2px;
`;

class Uns extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.loadImages();
  }

  loadImages = async () => {
    const response = await api.get('/photos?client_id=a972ebf867c33a917ea0b5268e20f344e64a6c8aed1eaabc01d5483d7dd2e9a3');
    console.log('data', response.data);

    this.setState({ list: response.data });
  }

  render() {
    return (
			<Container>
        <Aside>
          <Title>Making something awesome with Unsplash.</Title>
        </Aside>
        <ContainerItems>
          {this.state.list.map(item => (
            <Item>
              <Figure>
                <Image src={item.urls.small} alt={item.alt_description} />
                <FigureTexts>
                  <Text>Likes:</Text>
                  <Text marginL red>{item.likes}</Text>
                </FigureTexts>
              </Figure>
            </Item>
          ))}
        </ContainerItems>
			</Container>
    )
  }
}

export default Uns;
