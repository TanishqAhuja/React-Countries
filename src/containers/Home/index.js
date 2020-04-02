import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Input, Select } from 'antd';
import Header from '../../Components/Header'
import DisplayCards from '../../Components/DisplayCards'
import * as actions from '../../redux/actions';

const { Option } = Select;
const { Search } = Input;
const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

class Home extends React.Component {

    componentDidMount() {
        this.props.actions.getAllCountries();
    };

    getSearchResults(searchKey) {
        this.props.actions.getCountriesBySearch(searchKey);
    };

    filterByRegion(region) {
        this.props.actions.getCountriesByRegion(region);
    };

    render() {
        return (
            <>
                <Header toggleDarkMode={this.props.actions.toggleDarkMode} dark={this.props.dark} />
                <Row justify="space-between" style={{
                    margin: '35px 60px',
                }}>
                    <Col>
                        <Search size="large" placeholder="Search for a country..."
                            onSearch={value => this.getSearchResults(value)}
                            style={{
                                backgroundColor: this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                                borderColor: this.props.dark ? 'hsl(209, 23%, 22%)' : '',
                                color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
                            }} />
                    </Col>
                    <Col>
                        <Select size="large" placeholder="Filter by Region"
                            style={{ width: 170 }}

                            dropdownStyle={{
                                backgroundColor: this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                            }}
                            onSelect={value => this.filterByRegion(value)}>
                            {regions.map(region => (
                                <Option style={{ color: this.props.dark ? 'grey' : 'hsl(200, 15%, 8%)' }}
                                    value={region}>{region}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <DisplayCards countries={this.props.countries} history={this.props.history} dark={this.props.dark} />
            </>
        )
    };
};

const mapStateToProps = state => ({
    countries: state.countries,
    dark: state.dark,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);