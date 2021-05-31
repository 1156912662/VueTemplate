import amapInput from '@/components/amap';
import './style.less';
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
export default {
  name: 'form-list',
  components: {
    amapInput
  },
  props: {
    config: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' })
    };
  },
  computed: {},
  watch: {},
  methods: {
    Decorator(data) {
      console.log(data.initialValue);
      return [
        data.value,
        { initialValue: data.initialValue || '', rules: [{ required: data.require, message: data.message }] }
      ];
    },
    inputContent(data) {
      const props = {
        placeholder: data.placeholder
      };
      return (
        <aInput
          {...{ props: props }}
          vDecorator={[data.value, { rules: [{ required: data.require, message: data.message }] }]}
        />
      );
    },
    numberInput(data) {
      const attr = {
        formatter: value => `${value}${data.unit}`,
        parser: value => value.replace(data.unit, '')
      };
      return (
        <aInputNumber
          {...{ props: { ...attr, ...data.attr } }}
          vDecorator={[data.value, { rules: [{ required: data.require, message: data.message }] }]}
        />
      );
    },
    CascadeInput(data) {
      const filter = (inputValue, path) =>
        path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
      return (
        <aCascader
          {...{ props: { ...data.attr } }}
          vDecorator={[data.value, { rules: [{ required: data.require, message: data.message }] }]}
          show-search={{ filter }}
        />
      );
    },
    selectContent(data) {
      return (
        <aSelect filter vDecorator={this.Decorator(data)}>
          {data.options.map(item => (
            <aSelectOption value={item.value}>{item.label}</aSelectOption>
          ))}
        </aSelect>
      );
    },
    switchContent(data) {
      return (
        <aSwitch
          {...{ props: data.attr }}
          vDecorator={[
            data.value,
            {
              initialValue: data.initialValue || false,
              valuePropName: 'checked',
              rules: [{ required: data.require, message: data.message }]
            }
          ]}
        />
      );
    },
    MapInput(data) {
      return <amapInput {...{ props: data.attr }} vDecorator={this.Decorator(data)} />;
    },
    TextareaInput(data) {
      return <aTextarea {...{ props: data.attr }} auto-size vDecorator={this.Decorator(data)} />;
    },
    DateContent(data) {
      return <aDatePicker {...{ props: data.attr }} vDecorator={this.Decorator(data)} class="width100" />;
    },
    formItemContent(data) {
      switch (data.type) {
        case 'input':
          return this.inputContent(data);
        case 'number':
          return this.numberInput(data);
        case 'cascader':
          return this.CascadeInput(data);
        case 'select':
          return this.selectContent(data);
        case 'switch':
          return this.switchContent(data);
        case 'map':
          return this.MapInput(data);
        case 'textarea':
          return this.TextareaInput(data);
        case 'date':
          return this.DateContent(data);
        default:
          break;
      }
    },
    formItem(data) {
      return (
        data.children &&
        data.children.map(item => (
          <aCol span={item.col}>
            <aFormItem {...{ props: formItemLayout }} label={item.name}>
              {this.formItemContent(item)}
            </aFormItem>
          </aCol>
        ))
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(err);
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  },
  render() {
    return (
      <aForm onSubmit={this.handleSubmit} form={this.form} class="form-list">
        {this.config.map(item => (
          <div>
            <p>{item.title}</p>
            <aRow gutter={10}>{this.formItem(item)}</aRow>
          </div>
        ))}
        <aFormItem wrapperCol={{ span: 12, offset: 5 }}>
          <aButton type="primary" html-type="submit">
            Submit
          </aButton>
        </aFormItem>
      </aForm>
    );
  }
};
