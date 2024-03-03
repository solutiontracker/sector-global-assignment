export default function Children(items: Array<any>, array: Array<any>) {

    for (let i = 0; i < items?.length; i++) {
        const item = items[i];
        if (item?.descendants
            ?.length > 0) {
            Children(item?.descendants
                , array);
        }
        if (item?.id !== undefined) {
            array.push(item?.id);
        } else {
            array.push(item?.key);
        }
    }
    return array;

}