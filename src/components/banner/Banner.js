import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/safe.png";
import apiIP from "../../services/api";

const Banner = () => {

  const [ip, setIP] = useState();

  useEffect(() => {
    apiIP.get(`/ipgeo?apiKey=67bb191f917e4da3bf850028d1c4bc00`).then(data => {
      setIP(data.data.ip)
    })
  }, [])
  return (
    <div className="static-slider-head banner" style={{ marginTop: "75px" }}>
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">Verificar segurança da url</h1>
            <h4 className="subtitle font-light">
              A internet veio para facilitar a vida de todos nós,
              <br /> mas não quer dizer que só trouxe coisas boas.
            </h4>

            <br />
            <br />
            <div>
              <h3 className="text-white">IP: {(ip) ? ip : ''}</h3>{" "}
              <h3 className="text-white">Seguro: Sim ou Não</h3>
            </div>
            <Form className="m-t-40">
              <input
                type="text"
                name="email"
                placeholder="Digitar url ..."
                className="font-16"
              />
              <input
                type="submit"
                value="Consultar"
                className="bg-warning font-semibold font-16 btn-rounded text-uppercase text-dark text-center"
              />
            </Form>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
