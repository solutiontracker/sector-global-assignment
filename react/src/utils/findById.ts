export default function findById(subMenuItems: Array<any> | undefined, id: number): any {

    if (subMenuItems) {
        for (let i = 0; i < subMenuItems.length; i++) {
            if (subMenuItems[i]?.id === id || subMenuItems[i]?.key === id) {
                return subMenuItems[i];
            }
            const found = findById(subMenuItems[i]?.descendants, id);
            if (found) return found;
        }
    }

}