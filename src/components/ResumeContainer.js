import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { CardFooter, Card, CardColumns, CardTitle, CardLink, Row, Container, Button, CardHeader } from 'reactstrap'

import { getAllResumes, deleteSingleResume } from '../actions/resume'
import { navigateTo } from '../helpers'
import ConfirmModal from './ResumeHelpers/ConfirmModal'

const ResumeContainer = ({ getAllResumes, resumesState, deleteSingleResume }) => {
    const [modal, setModal] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const toggle = () => setModal(!modal);
    const { resumes } = resumesState
    const history = useHistory()
    const onDelete = (id) => {
        toggle()
        setDeleteItem(id)
    }
    const onDeleteCancel = (id) => {
        toggle()
        setDeleteItem(null)
    }
    const onConfirmClick = () => {
        toggle()
        deleteSingleResume(deleteItem)
        setDeleteItem(null)
    }
    useEffect(() => {
        getAllResumes()
    }, [getAllResumes])
    return (
        <Container >
            <Row>
                <CardColumns style={{ margin: '3rem auto', display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
                    {!resumes.length ? <p>No Resumes Added</p> :
                        resumes.map((resume, i) => (
                            <Card key={i}>
                                <CardHeader>
                                    <CardTitle style={{ cursor: 'pointer' }}><CardLink onClick={() => navigateTo(history, `/view/${resume.id}`)}>{resume.template ?? `Resume Template ${i + 1}`}</CardLink></CardTitle>
                                </CardHeader>
                                <CardFooter>
                                    <Button size="sm" onClick={() => navigateTo(history, `/edit/${resume.id}`)} color="outline-primary">Edit</Button>{' '}
                                    <Button size="sm" onClick={() => navigateTo(history, `/view/${resume.id}`)} color="outline-secondary">View</Button>{' '}
                                    <Button size="sm" onClick={() => onDelete(resume.id)} color="outline-danger">Delete</Button>{' '}
                                </CardFooter>
                            </Card>
                        ))}
                </CardColumns>
            </Row>
            <ConfirmModal modal={modal} onDeleteCancel={onDeleteCancel} onConfirmClick={onConfirmClick} />
        </Container>
    )
}

ResumeContainer.propTypes = {
    getAllResumes: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    resumesState: state.resumes
})


export default connect(mapStateToProps, { getAllResumes, deleteSingleResume })(ResumeContainer)
