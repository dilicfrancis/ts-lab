import styles from "./TaskItems.module.css";

const TaskItems: React.FC<{ tasks: string; onRemoveTask: () => void }> = (
  props
) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTask}>
      {props.tasks}
    </li>
  );
};

export default TaskItems;
