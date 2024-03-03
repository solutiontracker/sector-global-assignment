import makeApi from "@/utils/ConfigureAxios";

import { Activity } from '@/models/Activity';

import { GeneralResponse } from '@/models/GeneralResponse';

const baseUrl = `/api`

export const getActivityApi = (payload: any): Promise<Activity> => {
    return makeApi(`${process.env.REACT_APP_API_URL}`).get(`${baseUrl}/company/activities`);
}

export const submitActivityApi = (payload: any): Promise<GeneralResponse> => {
    return makeApi(`${process.env.REACT_APP_API_URL}`).post(`${baseUrl}/company/activities/create`, payload);
}