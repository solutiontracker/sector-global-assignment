import React, { FC } from 'react';
import ActivityModal from '@/components/templates/company/activity-modal';
import UseCompanyService from '@/store/services/UseCompanyService';
import FlatTree from '@/utils/flatTree';

const Index: FC = () => {

    const { activities, dispatchActivityAction, ids } = UseCompanyService();

    const [id, setID] = React.useState<number>(0);

    React.useEffect(() => {
        dispatchActivityAction();
    }, [dispatchActivityAction]);

    const reset = () => {
        setID(0);
    }

    return (
        <>
            <div className="col-md-6">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-my-profile" role="tabpanel"
                        aria-labelledby="v-my-profile-tab" tabIndex={0}>
                        <div className="card">
                            <div className="card-header fw-semibold bg-white p-3">
                                Other Information
                            </div>
                            <div className="card-body p-3">
                                {activities?.map((activity: any, key: number) =>
                                    <React.Fragment key={key}>
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="card-text">{activity?.name}</h6>
                                                {FlatTree(activities[0].values, ids, [])?.map((option: any, key: number) =>
                                                    <button className="btn btn-light m-1">{option.name}</button>
                                                )}
                                            </div>
                                            <div className="col-auto">
                                                <span onClick={(e: any) => {
                                                    e.preventDefault();
                                                    setID(activity.id)
                                                }} style={{ cursor: 'pointer' }} className="text-primary"><i
                                                    className="me-2" data-feather="edit-3" style={{ width: '16px', height: '16px' }}></i>Edit
                                                </span>
                                            </div>
                                        </div>
                                        {activities?.length !== (key + 1) && (
                                            <hr className="my-4" />
                                        )}
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-password-settings" role="tabpanel"
                        aria-labelledby="v-password-settings-tab" tabIndex={0}>...
                    </div>
                </div>
            </div >
            {id ? (
                <ActivityModal id={id} reset={reset} />
            ) : ''}
        </>
    )
}

export default Index