/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import UseCompanyService from '@/store/services/UseCompanyService';
import Descendants from "@/components/molecules/company/activity/descendants";

type props = {
    id: number,
    reset: () => void,
}

const ActivityModal = ({ id, reset }: props) => {

    const { activities, ids, dispatchIdsAction, dispatchCreateActivityAction } = UseCompanyService();

    const [nodes, setNodes] = React.useState<any>([]);

    React.useEffect(() => {
        setNodes(ids)
    }, [])

    return (
        <Modal className="modal fade" show={id > 0} onHide={() => {
            dispatchIdsAction({ ids: nodes });
            reset();
        }} animation={false} size="lg" centered>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel" style={{ verticalAlign: 'top' }}>
                    <Icon.PencilSquare size={16} style={{ marginRight: '5px' }} />
                    Edit
                </h5>
            </Modal.Header>
            <Modal.Body className='overflow-auto' style={{ height: '500px' }}>
                <h6 className="mt-0 mb-3 fw-bold">{activities.filter((activity: any, key: number) => activity.id === id)[0]?.name}</h6>
                <Descendants activity_id={id} my={3} values={activities.filter((activity: any, key: number) => activity.id === id)[0].values} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    dispatchIdsAction({ ids: nodes });
                    reset();
                }}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    reset();
                    dispatchCreateActivityAction(ids)
                }}>
                    Save changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ActivityModal