import React, { useState, useEffect } from "react";

const ModalForm = ({ active, handleModal }) => {
  const [disabled, setDisabled] = useState(true);
  const [formValue, setFormValue] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo submit
    handleModal();
  };

  useEffect(() => {
    if (formValue.username && formValue.phone) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formValue]);

  return (
    <div className={`modal ${active}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-content">
        <div className="content">
          <p className="is-size-4 has-text-centered heading">联系我们</p>
          <p className="is-size-6 has-text-centered has-text-grey-light">
            专注于人工智能算法研发，致力于成为最能读懂这个世界的科技公司
          </p>
          <br />
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  <span className="h-icon form-star" />
                  联系人
                </label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      name="username"
                      className="input"
                      type="text"
                      placeholder="请输入联系人姓名"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  <span className="h-icon form-star" />
                  联系电话
                </label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      name="phone"
                      className="input"
                      type="text"
                      placeholder="请输入联系人手机号码"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">联系邮箱</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      name="email"
                      className="input"
                      type="email"
                      placeholder="请输入联系人邮箱"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">咨询问题</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <textarea
                      name="ask"
                      className="textarea"
                      placeholder="请描述您的应用场景和技术能力要求"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="control">
              <button
                className="button is-link"
                type="submit"
                disabled={disabled}
              >
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleModal}
      ></button>
    </div>
  );
};

export default ModalForm;
