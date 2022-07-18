import FormComponent from "../../components/TypeFormLikePage/FormComponent";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findMember } from "../../redux/slices/memberSlice";
import { createNewProject, findProject } from "../../redux/slices/projectSlice";
import { findAllProjects } from "../../redux/slices/projectsSlice";
import { findSkill, findAllSkillNames } from "../../redux/slices/skillSlice";
import { findSkills } from "../../redux/slices/skillsSlice";
import { findUser } from "../../redux/slices/userInspectSlice";
import { findAllUsers } from "../../redux/slices/usersInspectSlice";
import GreenBudgetForm from "../../components/TypeFormLikePage/BudgetComponent";
import ScopeRolesComponent from "../../components/TypeFormLikePage/ScopeRolesComponent";
import GeneralGreenFromComponent from "../../components/GenralComponents/GeneralGreenFromComponent";
import RoleComponent from "../../components/TypeFormLikePage/RoleComponent";

function Form() {
  const [phase, setPhase] = useState(0);
  // const [phase, setPhase] = useState(2);
  const [questions, setQuestions] = useState([
    {
      title: "What’s the tilte of the new project?",
      description: "description 1",
      reply: "",
    },
    {
      title: "Description of the new project?",
      description:
        "Key info on what will make the filling curcial: for ex - great titles are  short & descriptive bla bla",
      reply: "",
    },
    {
      title: "BUDGET APPLICATION",
      totalBudget: "",
      kickoffDate: "",
      wrapUpDate: "",
      notesAndJustification: "",
    },
  ]);

  const changePhase = (phaseNow) => {
    if (questions.length - 1 > phaseNow) {
      setPhase((phaseNow += 1));
    } else {
      submitReply();
    }
  };

  const skills = useSelector((state) => state.skillsInspect.skillsInfo);

  console.log("skills = " , skills)


  const dispatch = useDispatch();

  const handleChange = (e, phaseNow, changeField) => {
    let newArr = [...questions];
    newArr[phaseNow][changeField] = e.target.value;
    setQuestions(newArr);
  };

  const submitReply = () => {
    const field = {
      title: questions[0].reply,
      description: questions[1].reply,
      totalBudget: questions[2].totalBudget,
      kickoffDate: questions[2].kickoffDate,
      wrapUpDate: questions[2].wrapUpDate,
      // notesAndJustification: questions[2].notesAndJustification,
    };
    dispatch(createNewProject(field));
  };

  //Testing\\

  useEffect(() => {
    const params = {
      returnMembers: false,
    }
    
    dispatch(findSkills(params));
  }, []);

  // useEffect(() => {
  //   const lookForProject = () => {
  //     const field = {
  //       _id: "62c0dac5a38139000437e607"
  //     };

  //     dispatch(findProject(field))
  //   }
  //   lookForProject()
  // }, [phase])

  // useEffect(() => {
  //   let field;

  //   field = {
  //     _id: "908392557258604544",
  //   };

  //   // dispatch(findMember(field))
  //   console.log("we are in the useEffect");

  //   // field = {
  //   //   tagName: "coding"
  //   // };

  //   // console.log("findSkill = ",field )

  //   // dispatch(findSkill(field))

  //   field = {
  //     _id: "908392557258604544",
  //   };

  //   console.log("field = ", field);

  //   // dispatch(findUser(field));

  //   // dispatch(findAllUsers(field))
  // }, []);

  return (
    <>
      {/* {phase <= 1 ? (
        <FormComponent
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
        />
      ) : (
        <GreenBudgetForm
          handleChange={handleChange}
          changePhase={changePhase}
          questions={questions[phase]}
          phase={phase}
          submitReply={submitReply}
        />
      )} */}

      {/* <ScopeRolesComponent/> */}
      {/* <GeneralGreenFromComponent/> */}
      <RoleComponent />
    </>
  );
}

export default Form;

// bash gitBash/
