import React from 'react';
import { Switch, Row, Dropdown, } from 'antd';

export default class Header extends React.Component {

    checkTheme() {
        document.body.style.background = this.props.dark ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
        let searchInput = document.getElementsByClassName('ant-input-lg')[0]
        let dropdown = document.getElementsByClassName('ant-select-selector')[0];
        if (searchInput && dropdown) {
            searchInput.style.backgroundColor = this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)';
            searchInput.style.color = this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)';
            dropdown.style.backgroundColor = this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)';
            dropdown.style.color = this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)';
            dropdown.style.borderColor = this.props.dark ? 'hsl(209, 23%, 22%)' : '';
        }
    }

    componentDidMount() {
        this.checkTheme();
    }

    componentDidUpdate(prevProps) {
        if (this.props.dark != prevProps.dark) {
            this.checkTheme();
        }
    };

    render() {
        return (
            <div style={{
                width: '100%', padding: '15px 60px', backgroundColor: this.props.dark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
                borderBottom: `solid 1px ${this.props.dark ? 'hsl(209, 23%, 22%)' : '#dfe2e7'}`, color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
            }}>
                <Row justify='space-between'>
                    <h2 style={{ margin: 0, color: this.props.dark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)' }}>
                        Where in the world?
                    </h2>
                    <Row style={{ marginTop: 5 }}><p style={{ margin: 0 }} className='main'>
                        <b>Dark Mode&nbsp;&nbsp;</b></p>
                        <Switch checkedChildren="🌙" unCheckedChildren="🌞" checked={this.props.dark} onChange={() => this.props.toggleDarkMode()} />
                    </Row>
                </Row>
            </div>
        );
    }

}
