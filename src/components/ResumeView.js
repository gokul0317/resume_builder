import React, { useEffect, createRef } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux"
import { Container, Button, Col, Row } from 'reactstrap'
import { getSingleResume, loadingResume } from '../actions/resume'
import ReactToPdf from 'react-to-pdf'
import navBarWrapper from './NavBarDecorator'
import { useState } from 'react'
import { validResume } from '../helpers'

let ResumeView = (props) => {
    const { id } = useParams()
    const ref = createRef();

    const { getSingleResume, resume, loadingResume, loading } = props
    const fileName = !resume || !resume.firstName ? 'resume.pdf' : `${resume.firstName}${`${resume.lastName ?? ''}`}.pdf`
    const [resumeValid, setValidResume] = useState(true)
    useEffect(() => {
        if (id) {
            loadingResume()
            getSingleResume(id)
        }
    }, [id, getSingleResume, loadingResume])

    useEffect(() => {
        setValidResume(validResume(resume))
    }, [resume])

    if (loading) {
        return <p>Loading..</p>
    }

    if (!resumeValid) {
        return <h4 style={{ textAlign: "center", marginTop: "1rem" }}>Resume Not Found</h4>
    }

    return (
        <div>
            <Container style={{ marginTop: '1rem' }}>
                <div style={{ display: 'grid', justifyContent: "end" }}>
                    <ReactToPdf targetRef={ref} filename={fileName}>
                        {({ toPdf }) =>
                        (<Button color="primary" onClick={toPdf} >Download</Button>
                        )}
                    </ReactToPdf>
                </div>
            </Container>
            <div ref={ref}>
                <Container>
                    <Row>
                        <Col md={6}>
                            {resume.firstName} {resume.lastName}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            {resume.gender}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            {resume.email}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>{resume.phone}</Col>
                    </Row>
                    <Row>
                        <Col md={6}>{resume.address}</Col>
                    </Row>
                    <Row>
                        <Col md={6}>{resume.city} {resume.zipcode && `,`} {resume.zipcode}</Col>
                    </Row>
                    <hr />
                    <Row style={{ marginTop: '2rem' }}>
                        <Col>
                            <h3>Education</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={12}>
                            {resume.education && resume.education.map((elm, i) => (
                                <div key={i}>
                                    <Row>
                                        <Col><h5>{elm.name}</h5></Col>
                                    </Row>
                                    <Row>
                                        <Col><h6>{elm.courseTitle}</h6></Col>
                                    </Row>
                                    <Row>
                                        <Col md={2}>
                                            <h6>Start: {elm.start}</h6>
                                        </Col>
                                        <Col md={2}>
                                            <h6>End: {elm.end}</h6>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '2rem' }}>
                        <Col>
                            <h3>Experience</h3>
                        </Col>
                    </Row>
                    <hr />
                    {resume.experience && resume.experience.map((elm, i) => (
                        <div key={i}>
                            <Row>
                                <Col><h5>{elm.name}</h5></Col>
                            </Row>
                            <Row>
                                <Col><h6>{elm.courseTitle}</h6></Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <h6>Start: {elm.start}</h6>
                                </Col>
                                <Col md={2}>
                                    <h6>End: {elm.end}</h6>
                                </Col>
                            </Row>
                        </div>
                    ))}
                    <Row style={{ marginTop: '2rem' }}>
                        <Col>
                            <h3>Skills</h3>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            {resume.skills && resume.skills.join(", ")}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}


ResumeView = connect(
    state => {
        return {
            resume: state.resumes.resume,
            loading: state.resumes.loading
        }
    },
    { getSingleResume, loadingResume }
)(ResumeView)


@navBarWrapper()
class ResumeViewWrapper extends React.Component {
    render() {
        return (
            <ResumeView />
        )
    }
}

export default ResumeViewWrapper
