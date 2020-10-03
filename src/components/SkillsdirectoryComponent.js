import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSkill: null
        };
    }

    onSkillSelect(skill) {
        this.setState({ selectedSkill: skill });
    }

    renderSelectedSkill(skill) {
        if (skill) {
            return (
                <Card>
                    <CardImg top src={skill.image} alt={skill.name} />
                    <CardBody>
                        <CardTitle>{skill.name}</CardTitle>
                        <CardText>{skill.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.skills.map(skill => {
            return (
                <div key={skill.id} className="col-6">
                    <Card onClick={() => this.onSkillSelect(skill)}>
                        <CardImg width="100%" src={skill.image} alt={skill.name} />
                        <CardImgOverlay>
                            <CardTitle>{skill.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-6">
                        {this.renderSelectedSkill(this.state.selectedSkill)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;