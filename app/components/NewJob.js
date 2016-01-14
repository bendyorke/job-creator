import React, { Component, PropTypes } from 'react'

import Radio from 'components/Radio'
import Checkbox from 'components/Checkbox'
import Markdown from 'components/Markdown'
import SelectArea from 'components/SelectArea'
import styles from 'css/NewJob'

class NewJob extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.pageTitle}>Add new job</div>

        {/* Form */}
        <div className={styles.column}>
          <div className={styles.columnTitle}>
            Use job ad creator to help create a job ad?
          </div>

          <Radio className={styles.radio} active={true}>
            Yes, use job ad creator
          </Radio>

          <Radio className={styles.radio} active={false}>
            No, I’ll create a job ad myself
          </Radio>

          <div className={styles.rule} />

          <label className={styles.label}>
            Job title
          </label>

          <input className={styles.input} />

          <div className={styles.rule} />

          <label className={styles.label}>
            Location
          </label>

          <input className={styles.input} />

          <Checkbox className={styles.checkboxActive} active={true}>
            This is a remote or telecommute job
          </Checkbox>

          <div className={styles.rule} />

          <label className={styles.label}>
            Choose the skills you consider to be essential to
          </label>

          <SelectArea
            className={styles.select}
            options={[
              "Over 25 years old",
              "Driver license",
              "Clean driving record",
              "Flexible availability",
              "Heavy Rigid License",
              "Presentable",
              "Punctual",
              "Friendly",
              `"Can do" attitude`,
              "Excellent Presentation",
            ]} />

          <div className={styles.rule} />

          <label className={styles.label}>
            What benefits do you offer?
          </label>

          <SelectArea
            className={styles.select}
            options={[
              "401k",
              "Medical Insurance",
              "Dental Insurance",
              "Day shift",
              "Long Term Care Insurance",
              "Paid Sick Leave",
              "Paid Military Leave",
              "Paid holidays",
            ]} />

          <div className={styles.rule} />

          <label className={styles.label}>
            Describe your company
          </label>

          <textarea
            className={styles.textarea}
            placeholder="About your company" />

        </div>

        {/* Preview */}
        <div className={styles.column}>
          <div className={styles.columnTitle}>
            Preview of your job ad
          </div>

          <Markdown className={styles.preview}>{`
# Truck Driver
### Manchester City, England

## About the company

eos ei minimum argumentum, vero deleniti ei his, munere audiam vis et. Sea no mundi quidam, ut vis nihil impedit oporteat, tale recteque persequeris vel ne. At sea dolor legere, nec ea interesset accommodare. Mea at libris dolores, vel cu accusam periculis gloriatur.

## No choro lobortis eam.
In clita explicari usu. Has aliquid alienum periculis no, nec atomorum platonem splendide ut, ne eam habemus intellegat definitiones. Sea ad iusto omnesque definitiones. Deleniti reprimique per eu, eos omnium iuvaret contentiones ad. Mea te novum diceret voluptatibus, no qui novum iudico tritani, sit no graeci nominavi. Ea vel persius fastidii, eu nemore nonumes explicari pri.


Tation omnium consetetur pri at:
- mea diceret facilis delectus ad.
- At dicit pertinacia eam, pro te porro paulo postea.
- No wisi brute elitr nec. In nam harum sententiae, etiam facilisi ut qui, vocibus voluptua efficiantur mei ad.
- Ei his ullum vocent.
- Eam quaeque honestatis eu, eum te denique aliquando, id affert cetero liberavisse nam.
- Ex vix soluta pericula.


In vix vidit viderer officiis. In regione oblique dissentiet cum, doctus consetetur id nec. Nusquam omittam ad sit, mei cu modo dolor oportere. Eam quis dolorem no, esse modus intellegam mea ne, munere soleat putent has cu. Eu dictas perpetua mediocrem vel. Elitr saepe corrumpit eu vim, in ius nostrud verterem senserit.


Vim qualisque periculis neglegentur ea, an nam enim minim, quo an meis omittantur. Qui summo semper eruditi ne, nec etiam viderer ex, essent omittam moderatius vel et. Ei justo consequuntur mei. Nam at purto adversarium suscipiantur, nam te porro quodsi malorum.
          `}</Markdown>
          <div className={styles.publish}>Publish your job</div>
        </div>
      </div>
    )
  }
}

export default NewJob
