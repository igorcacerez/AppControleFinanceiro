import React from 'react';
import Swipeable from "../../../../adapters/gesture/Swipeable";
import Item from "../../../Movimentacoes/Item";
import {renderButtonDelete} from "./buttonActions";

// Componente de item da lista que pode ser deslizado
const ListDragButton = ({ item, onSwipeFromRight }) => (
    <Swipeable renderRight={(progress, dragX) => renderButtonDelete(progress, dragX, onSwipeFromRight)}>
        <Item icon={false}
              style={{marginVertical: 0, borderRadius: 0, borderBottomWidth: 1}}
              type={item.type} title={item.title} date={item.date} value={item.value} />
    </Swipeable>
);

export default ListDragButton;
