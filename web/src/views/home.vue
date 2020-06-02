<template>
  <div class="container">
    <Nav></Nav>
    <component :is="component" class="index"></component>
    <foot class="foot"></foot>
  </div>
</template>

<script>
    import Nav from "../components/home/Nav"
    import box from "../components/box"
    import selectTest from "../components/home/select"
    import staff from "../components/home/staff"
    import report from "../components/home/report"
    import organization from "../components/home/organization"
    import manageKnowledge from "../components/home/knowledge"
    import knowledge from "../components/knowledge"
    import staffPerson from '../components/person/staffPerson'
    import subjectPerson from '../components/person/subjectPerson'
    import logo from '../components/home/logo'
    import foot from "../components/footer"
    import rule from '../components/home/rule'
    import power from '../components/home/power'
    import comment from '../components/home/comment'
    import information from '../views/personal'
    import question from '../views/question'
    import newQuestion from '../components/questionnaire/newQuestion'
    import viewQuestionnaire from '../components/questionnaire/viewQuestion'

    export default {
        name: "home.vue",
        components:{
          Nav,
          box,
          selectTest,
          staff,
          report,
          organization,
          foot,
          knowledge,
          manageKnowledge,
          subjectPerson,
          staffPerson,
          logo,
          rule,
          power,
          comment,
          information,
          question,
          newQuestion,
          viewQuestionnaire
        },
        computed:{
            component(){
                return this.$store.state.component;
            }
        }
    }
</script>

<style scoped>
   .container{
     background-color:#f6f6f6;
   }
</style>
