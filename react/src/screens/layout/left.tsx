import React, { FC } from 'react';
import * as Icon from 'react-bootstrap-icons';

const Left: FC = () => {
    return (
        <div className="col-md-3">
            <div className="d-flex">
                <div className="gap-2 w-100 nav flex-column nav-pills nav-fill" id="v-pills-tab"
                    role="tablist" aria-orientation="vertical">
                    <button className="p-3 btn btn-light text-start active" id="v-my-profile-tab"
                        data-bs-toggle="pill" data-bs-target="#v-my-profile" type="button"
                        role="tab" aria-controls="v-my-profile" aria-selected="true">
                        <Icon.PersonSquare size={16} style={{ marginRight: '5px' }} />
                        My Profile
                    </button>
                    <button className="p-3 btn btn-light text-start" id="v-password-settings-tab"
                        data-bs-toggle="pill" data-bs-target="#v-password-settings" type="button"
                        role="tab" aria-controls="v-password-settings" aria-selected="false">
                        <Icon.Lock size={16} style={{ marginRight: '5px' }} />
                        Password &
                        Settings
                    </button>
                    <button className="p-3 btn btn-light text-start" id="v-notification-settings-tab"
                        data-bs-toggle="pill" data-bs-target="#v-notification-settings"
                        type="button" role="tab" aria-controls="v-notification-settings"
                        aria-selected="false">
                        <Icon.Bell size={16} style={{ marginRight: '5px' }} />
                        Notification
                        Settings
                    </button>
                    <button className="p-3 btn btn-light text-start" id="v-company-profile-tab"
                        data-bs-toggle="pill" data-bs-target="#v-company-profile" type="button"
                        role="tab" aria-controls="v-company-profile" aria-selected="false">
                        <Icon.Briefcase size={16} style={{ marginRight: '5px' }} />
                        Company
                        Profile
                    </button>
                    <button className="p-3 btn btn-light text-start" id="v-manage-content-tab"
                        data-bs-toggle="pill" data-bs-target="#v-manage-content" type="button"
                        role="tab" aria-controls="v-manage-content" aria-selected="false">
                        <Icon.Clipboard size={16} style={{ marginRight: '5px' }} />
                        Manage
                        Content
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Left