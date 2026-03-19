import styles from "./TaskSettingsModal.module.css";
import Button from "..//..//componentsShare/Button";
const TaskSettingsModal = (props) => {
  const { isOpen, handleEditPriorityTask, taskId } = props;

  return (
    <>
      {isOpen ? (
        <div className={styles.div_modal_overlay}>
          <div className={styles.div_modal_content}>
            <p>Приоритет</p>
            <div className={styles.div_priority_task}>
              <Button
                onClick={() => handleEditPriorityTask(taskId, "high")}
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ff0202"
                      d="M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m-.008-1q2.5 0 4.25-1.75t1.75-4.25t-1.75-4.25T14.808 6t-4.25 1.75T8.808 12t1.75 4.25t4.25 1.75m2.467-2.794l.714-.714l-2.681-2.68V8.308h-1v3.906zM3.192 8.5v-1h3.616v1zm-1 4v-1h4.616v1zm1 4v-1h3.616v1zM14.808 12"
                    />
                  </svg>
                }
              />
              <Button
                onClick={() => handleEditPriorityTask(taskId, "normal")}
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fbff00"
                      d="M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m-.008-1q2.5 0 4.25-1.75t1.75-4.25t-1.75-4.25T14.808 6t-4.25 1.75T8.808 12t1.75 4.25t4.25 1.75m2.467-2.794l.714-.714l-2.681-2.68V8.308h-1v3.906zM3.192 8.5v-1h3.616v1zm-1 4v-1h4.616v1zm1 4v-1h3.616v1zM14.808 12"
                    />
                  </svg>
                }
              />
              <Button
                onClick={() => handleEditPriorityTask(taskId, "small")}
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0066ff"
                      d="M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m-.008-1q2.5 0 4.25-1.75t1.75-4.25t-1.75-4.25T14.808 6t-4.25 1.75T8.808 12t1.75 4.25t4.25 1.75m2.467-2.794l.714-.714l-2.681-2.68V8.308h-1v3.906zM3.192 8.5v-1h3.616v1zm-1 4v-1h4.616v1zm1 4v-1h3.616v1zM14.808 12"
                    />
                  </svg>
                }
              />

              <Button
                onClick={() => handleEditPriorityTask(taskId, "base")}
                children={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M14.816 19q-2.935 0-4.972-2.037t-2.036-4.971q0-2.913 2.037-4.953Q11.88 5 14.816 5q2.913 0 4.952 2.04t2.04 4.952q0 2.934-2.04 4.971T14.816 19m-.008-1q2.5 0 4.25-1.75t1.75-4.25t-1.75-4.25T14.808 6t-4.25 1.75T8.808 12t1.75 4.25t4.25 1.75m2.467-2.794l.714-.714l-2.681-2.68V8.308h-1v3.906zM3.192 8.5v-1h3.616v1zm-1 4v-1h4.616v1zm1 4v-1h3.616v1zM14.808 12"
                    />
                  </svg>
                }
              />
            </div>
            <div>
              <p>Дата</p>
            </div>
            <div className={styles.div_line}></div>
            <div className={styles.div_bottom_panel}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 12.41V5h1V4H8v1h1v7.41l-2 2V15h9v-.59zM17 14v2h-5v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V6H7V3h9v3h-1v6z"
                  />
                </svg>
                <p>Закрепить</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m8.054 16.673l-.727-.727L11.273 12L7.327 8.079l.727-.727L12 11.298l3.921-3.946l.727.727L12.702 12l3.946 3.946l-.727.727L12 12.727z"
                  />
                </svg>
                <p>Не буду делать</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.616 20q-.667 0-1.141-.475T6 18.386V6h-.5q-.213 0-.356-.144T5 5.499t.144-.356T5.5 5H9q0-.31.23-.54t.54-.23h4.46q.31 0 .54.23T15 5h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 6H18v12.385q0 .666-.475 1.14t-1.14.475zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.442zm-6.335 10.856q.143-.144.143-.356v-8q0-.213-.144-.356T10.307 8t-.356.144t-.143.356v8q0 .213.144.356q.144.144.356.144q.213 0 .357-.144m3.384 0q.143-.144.143-.356v-8q0-.213-.144-.356Q13.904 8 13.692 8q-.213 0-.357.144t-.143.356v8q0 .213.144.356t.357.144t.356-.144M7 6v13z"
                  />
                </svg>
                <p>Удалить</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default TaskSettingsModal;
