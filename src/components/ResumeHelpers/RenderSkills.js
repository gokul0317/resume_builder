import React from 'react'
import { FormGroup, Button, Col, Row } from 'reactstrap'
import CustomAutocomplete from './CustomSelect'
import { Field } from 'redux-form'
import './skills.css'
const RenderSkills = ({ fields, meta: { error } }) => (
    <>
        <Button type="button" size="sm" color="primary" onClick={() => fields.push()}>
            +
        </Button>
        <Col style={{ marginTop: '1rem' }}>
            {fields.map((skill, index) => (
                <Row key={index}>
                    <Col md={2}>
                        <FormGroup className="auto-complete">
                            <Field name={skill} component={CustomAutocomplete}/>
                        </FormGroup>
                    </Col>
                    <Col style={{ alignContent: "center", alignItems: "center" }}>
                        <Button
                            type="button"
                            title="Remove Skill"
                            onClick={() => fields.remove(index)}
                            size="sm"
                            color="danger"
                        >-</Button>
                    </Col>
                </Row>
            ))}
            {error && <li className="error">{error}</li>}
        </Col>
    </>
)
export default RenderSkills




// const RenderSkills = ({ fields, meta: { error } }) => (
//     <>
//         <Button type="button" size="sm" color="primary" onClick={() => fields.push()}>
//             +
//         </Button>
//         <Col style={{ marginTop: '1rem'}}>
//             {fields.map((skill, index) => (
//                 <Row key={index}>
//                     <Col md={4}>
//                         <FormGroup>
//                             <Input
//                                 tag={Field}
//                                 component="input"
//                                 type="input"
//                                 name={`${skill}`}
//                                 placeholder="Name"
//                             />
//                         </FormGroup>
//                     </Col>
//                     <Col style={{ alignContent: "center", alignItems: "center" }}>
//                         <Button
//                             type="button"
//                             title="Remove Skill"
//                             onClick={() => fields.remove(index)}
//                             size="sm"
//                             color="danger"
//                         >-</Button>
//                     </Col>
//                 </Row>
//             ))}
//             {error && <li className="error">{error}</li>}
//         </Col>
//     </>
// )