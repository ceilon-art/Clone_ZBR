import React, { useEffect, useState } from "react";

import {
  Container,
  Posters,
  CardInfo,
  CardImage,
  Description,
  Price,
  Button,
  TextButton,
} from "./styles";

interface Products {
  des: string;
  prv: number;
  img: string;
}

const Card: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://www.zbr.net.br/a17/");
      const data = await response.json();
      const convertion = Object.values(data);

      setProducts(convertion);
      console.log(convertion);

      return data;
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Posters>
        {products.map((product: Products) => (
          <CardInfo key={product.prv}>
            <CardImage source={{ uri: product?.img }} />
            <Description>{product.des}</Description>
            <Price>R$ {product.prv}</Price>
            <Button>
              <TextButton>Quero</TextButton>
            </Button>
          </CardInfo>
        ))}
      </Posters>
    </Container>
  );
};

export default Card;
