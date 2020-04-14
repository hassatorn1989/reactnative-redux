import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { GetLogin } from './../actions/LoginAction';

export class Login extends Component {
    componentDidMount() { 
        const data = {
            name : 'Hassatorn Kwanhom'
        }
        this.props.GetLogin(data);
    }
    render() {
        return (
            <View>
                <Text> {this.props.datas.name} </Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    datas: state.LoginReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    GetLogin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
