import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { closeTaskDetailSheet } from "../../redux/slices/taskDetailStatusSheetSlice";

function TaskDetailSheet(props){

  const taskDetailSide = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskDetailSide.current && !taskDetailSide.current.contains(event.target)) {
        dispatch(closeTaskDetailSheet())
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isTaskDetailSideBarOpen = useSelector(state => state.taskDetailSheetStatus.isTaskDetailSheetOpen) 
  const taskId = useSelector(state => state.taskDetailSheetStatus.taskId) 

  useEffect(()=>{
    
  },[])

  return <div ref={taskDetailSide} className={`h-screen text-5xl transition-all duration-500 w-[800px] bg-white border-1 shadow-lg absolute top-0 ${isTaskDetailSideBarOpen? "right-0":"-right-[800px]"} z-50`}>
    {taskId}
  </div>
}

export default TaskDetailSheet