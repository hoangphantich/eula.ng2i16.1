import {File} from "../../core/model/File";

/**
 * Model
 */
export interface User {

    id: number;

    avatarFile: File;

    name: string;

    created_at: string; //advantage -> function date

    role_id: number; //1->admin,2-> partner; 3->user

    tel: string;

    email: string;

    active: number; //1->active, 2-> inactive, 3-> pending

}