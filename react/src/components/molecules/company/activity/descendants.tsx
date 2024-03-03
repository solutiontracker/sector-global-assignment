import React, { ReactElement } from "react";
import * as Icon from 'react-bootstrap-icons';
import UseCompanyService from '@/store/services/UseCompanyService';
import InArray from "@/utils/InArray";
import findById from "@/utils/findById";
import Children from "@/utils/Children";

type props = {
    values: any[] | undefined,
    my: number,
    activity_id: number,
}

const Descendants = ({ values, my, activity_id }: props): ReactElement => {

    const { dispatchIdsAction, ids, activities, collapsed, dispatchCollapsedAction } = UseCompanyService();

    return (
        <React.Fragment>
            {values?.map((value: any, key: number) =>
                <div className={`${my === 3 ? 'check-list my-' + my : 'check-list-sub gap-2 ms-' + my}`} key={key}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            onChange={(e: any) => {
                                e.stopPropagation();
                                if (value?.descendants?.length > 0) {
                                    const result = value?.descendants?.filter((value: any, key: number) => value?.descendants?.length === 0 && !InArray(value.id, ids));
                                    if (result.length > 0) {
                                        dispatchIdsAction({ ids: [...ids, ...Children(findById(activities?.find((activity: any, key: number) => activity.id === activity_id)?.values, value.id)?.descendants, [])] });
                                    } else if (result.length === 0) {
                                        const result = value?.descendants?.map((descendant: any, key: any) => descendant.id)
                                        dispatchIdsAction({ ids: ids?.filter((id: number, key: any) => !InArray(id, result)) })
                                    }
                                } else {
                                    const result = ids?.filter((id: number, key: any) => id === value.id);
                                    dispatchIdsAction({ ids: result.length > 0 ? ids?.filter((id: number, key: any) => id !== value.id) : [...ids, value.id] })
                                }
                            }}
                            ref={(input) => {
                                if (input) {
                                    const result = value?.descendants?.filter((value: any, key: number) => value?.descendants?.length === 0 && InArray(value.id, ids));
                                    input.indeterminate = value?.descendants?.length > 0 && result.length > 0 && result.length !== value?.descendants?.filter((value: any, key: number) => value?.descendants?.length === 0).length ? true : false;
                                }
                            }}
                            checked={((value?.descendants?.length > 0 && value?.descendants?.filter((value: any, key: number) => value?.descendants?.length === 0 && InArray(value.id, ids)).length === value?.descendants?.filter((value: any, key: number) => value?.descendants?.length === 0).length) || (value?.descendants?.length === 0 && InArray(value.id, ids)))}
                            id={`flexCheckDefault-${value.id + key}`}
                        />
                        <label className="form-check-label"
                            htmlFor={`flexCheckDefault-${value.id + key}`}>
                            {value.name}
                            {value?.descendants?.length > 0 && (
                                <>
                                    {collapsed?.filter((id: number, key: number) => id === value.id).length > 0 ? (
                                        <Icon.ChevronDown onClick={(e: any) => {
                                            e.stopPropagation();
                                            e.preventDefault()
                                            dispatchCollapsedAction(collapsed?.filter((id: number, key: number) => id !== value.id))
                                        }} size={16} style={{ marginLeft: '10px' }} />
                                    ) : (
                                        <Icon.ChevronUp onClick={(e: any) => {
                                            e.stopPropagation();
                                            e.preventDefault()
                                            dispatchCollapsedAction([...collapsed, value.id])
                                        }} size={16} style={{ marginLeft: '10px' }} />
                                    )}
                                </>
                            )}
                        </label>
                    </div>
                    {value?.descendants?.length > 0 && collapsed?.filter((id: number, key: number) => id === value.id).length > 0 && (
                        <Descendants activity_id={activity_id} values={value?.descendants} my={my + 1} />
                    )}
                </div>
            )}
        </React.Fragment>
    )
};

export default Descendants;