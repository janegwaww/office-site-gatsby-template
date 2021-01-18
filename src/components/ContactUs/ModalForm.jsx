import React from "react";

const ModalForm = ({ active, handleModal }) => {
  return (
    <div className={`modal ${active}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-content">
        <div className="content">
          <p className="is-size-4 has-text-centered heading">联系我们</p>
          <p className="is-size-6 has-text-centered has-text-white-ter">
            专注于人工智能算法研发，致力于成为最能读懂这个世界的科技公司
          </p>
          <br />
          <div className="modal-form">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">联系人</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="请输入联系人姓名"
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">联系电话</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="请输入联系人手机号码"
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
                      className="input"
                      type="text"
                      placeholder="请输入联系人邮箱"
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
                      className="textarea"
                      placeholder="请描述您的应用场景和技术能力要求"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="control">
              <button className="button is-link" disabled>
                提交
              </button>
            </div>
          </div>
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
