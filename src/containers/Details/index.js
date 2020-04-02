import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Card } from 'antd';
import Header from '../../Components/Header'
import * as actions from '../../redux/actions';

class Details extends React.Component {

    componentDidMount() {
        this.props.actions.getCountryDetails(this.props.match.params.country);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.country != prevProps.match.params.country) {
            this.props.actions.getCountryDetails(this.props.match.params.country);
        }
    };

    render() {
        console.log(this.props);
        const { details, borders, history, dark } = this.props;
        return (
            <>
                <Header toggleDarkMode={this.props.actions.toggleDarkMode} dark={this.props.dark} />
                <Button style={{
                    margin: 60,
                    color: dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                    backgroundColor: dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                    borderColor: dark ? 'hsl(209, 23%, 22%)' : '',
                }}
                    onClick={() => history.goBack()}>⬅ &nbsp;Back</Button>
                {details &&
                    <Row justify='space-between' style={{ margin: '0px 60px' }}>
                        <Col span={11}>
                            <div style={{ width: 'auto' }}>
                                <img alt="example" src={details.flag} height={400} width='100%' />
                            </div>
                        </Col>
                        <Col span={11}>
                            <Card style={{
                                backgroundColor: this.props.dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)', border: 0,
                                color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                                height: '400px', width: 'auto', padding: 0
                            }}>
                                <h1 style={{ color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)', }}>
                                    {details.name}
                                </h1>
                                <Row justify='space-between'>
                                    <Card style={{
                                        color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                                        backgroundColor: this.props.dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
                                        border: 0
                                    }}>
                                        <p><b>Native Name: &nbsp;</b>{details.nativeName}</p>
                                        <p><b>Population: &nbsp;</b>{details.population}</p>
                                        <p><b>Region: &nbsp;</b>{details.region}</p>
                                        <p><b>Sub Region: &nbsp;</b>{details.subregion}</p>
                                        <p><b>Capital: &nbsp;</b>{details.capital}</p>
                                    </Card>
                                    <Card style={{
                                        backgroundColor: this.props.dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)',
                                        color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)', border: 0
                                    }}>
                                        <p><b>Top Level Domain: &nbsp;</b>{details.topLevelDomain}</p>
                                        <p><b>Currencies: &nbsp;</b>{details.currencies.map(currency => currency.name).join(', ')}</p>
                                        <p><b>Languages: &nbsp;</b>{details.languages.map(language => language.name).join(', ')}</p>
                                    </Card>
                                </Row>
                                <Row>
                                    <p><b>Border Countries: &nbsp;</b></p>
                                    <>
                                        {borders &&
                                            <Row gutter={[8]} style={{ width: 'auto', marginTop: -4 }}>
                                                {borders.map(border => (
                                                    <Col>
                                                        <Button style={{
                                                            padding: '4px 5px', marginBottom: 6,
                                                            color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
                                                            backgroundColor: this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                                                            borderColor: this.props.dark ? 'hsl(209, 23%, 22%)' : '',
                                                        }}
                                                            onClick={() => history.push(`/details/${border.name}`)}>
                                                            {border.name}
                                                        </Button>
                                                    </Col>
                                                ))}
                                            </Row>
                                        }
                                    </>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                }
            </>
        )
    };
};

const mapStateToProps = state => ({
    details: state.details,
    borders: state.borders,
    dark: state.dark,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));