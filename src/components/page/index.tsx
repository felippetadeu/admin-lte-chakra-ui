import React, { HTMLAttributes } from "react";
import MainContent from "../mainContent";
import Header from "../header";
import Breadcrumb from "../breadcrumb";
import Card from "../card";

interface IPage extends HTMLAttributes<HTMLDivElement>{}

function Page({ children, ...props }: IPage){
    return (
    <MainContent.MainContent>
          <MainContent.ContentHeader>
              <Header.Header>
                  <Header.Title>Teste</Header.Title>
                  <Header.Body>
                    <Breadcrumb.Breadcrumb>
                        <Breadcrumb.Item active={false}>Teste</Breadcrumb.Item>
                        <Breadcrumb.Item active={false}>Teste2</Breadcrumb.Item>
                        <Breadcrumb.Item active={false}>Teste3</Breadcrumb.Item>
                    </Breadcrumb.Breadcrumb>
                  </Header.Body>
              </Header.Header>
          </MainContent.ContentHeader>
          <MainContent.ContentBody>
              <Card.Card>
                  <Card.Header>
                    <Card.HeaderTitle>Title</Card.HeaderTitle>
                  </Card.Header>
                  <Card.Body>
                  Body
                  </Card.Body>
                  <Card.Footer>
                  Footer
                  </Card.Footer>
              </Card.Card>
          </MainContent.ContentBody>
      </MainContent.MainContent>
    );
}

export default Page;