import React from 'react';
import { Card, Col, Row, } from 'antd';

export default function DisplayCards(props) {
    return (
        <>
            {props.countries && !props.countries.message ?
                <Row justify='space-between' style={{ padding: '0 35px', marginTop: -15 }}>
                    {props.countries.map(country => (
                        <Col>
                            <Card
                                hoverable
                                style={{ width: 270, margin: 25, height: 370, border: 0 }}
                                bodyStyle={{
                                    backgroundColor: props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                                    color: props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
                                }}
                                cover={<img alt="example" src={country.flag} height={185} />}
                                onClick={() => props.history.push(`/details/${country.name}`)}
                            >
                                <div style={{ marginLeft: 24 }}>
                                    <h2 style={{ color: props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}>{country.name}</h2>
                                    <Row>
                                        <h4 style={{ color: props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}>Population:&nbsp;</h4>
                                        <p>{country.population}</p>
                                    </Row>
                                    <Row>
                                        <h4 style={{ color: props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}>Region:&nbsp;</h4>
                                        <p>{country.region}</p>
                                    </Row>
                                    <Row>
                                        <h4 style={{ color: props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}>Capital:&nbsp;</h4>
                                        <p>{country.capital}</p>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
                : props.countries && props.countries.message && <h1 style={{ padding: '0 60px', color: 'red' }}>{props.countries.message}</h1>
            }
        </>
    );
}
