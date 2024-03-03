export default function InArray(value: any, needle: Array<any>) {

    if (Array.isArray(needle)) {
        const count = needle?.filter((item: any) => item === value)?.length;
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

}