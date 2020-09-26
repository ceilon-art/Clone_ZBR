import React, { useEffect, useState } from "react";

import { Container, Posters, CardInfo, CardImage, Description } from "./styles";

interface Products {
  des: string;
  qtd: number;
  prv: number;
  img: string;
}

const Card: React.FC = () => {
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://www.zbr.net.br/a17/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setProducts(data);

          return data;
        });
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Posters>
        {/* {Object.keys(products).forEach(function (
          product: Products
        ): JSX.Element {
          return (
            <CardInfo>
              <CardImage />
            </CardInfo>
          );
        })} */}

        {/* <CardInfo>
          {products.map((product) => (
            <Description key={product.des}>{product.des}</Description>
          ))}
        </CardInfo> */}

        {/* {typeof products !== undefined &&
          products?.map((product) => <Description>{product.des}</Description>)} */}
      </Posters>
    </Container>
  );
};

export default Card;
