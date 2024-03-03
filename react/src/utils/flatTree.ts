import InArray from "./InArray";

export default function FlatTree(items: any, selected: any, array: any) {

    for (let i = 0; i < items.length; i++) {

        const item = items[i];

        if (item?.descendants?.length > 0) {
            FlatTree(item.descendants, selected, array);
        }

        if (InArray(item.id, selected)) {
            array.push(item);
        }
    }

    return array;

}