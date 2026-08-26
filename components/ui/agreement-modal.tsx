import { Modal } from "@/components/ui/modal";

export function AgreementModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="用户协议与隐私政策" maxWidth={560}>
      <div className="max-h-[60vh] overflow-auto pr-1">
        <h4 className="mb-1.5 text-[15px] font-bold">一、用户协议</h4>
        <p className="text-[13px] leading-[1.75] text-muted">
          欢迎使用话费代充系统（以下简称"本平台"）。在注册或使用本平台服务前，请您务必仔细阅读并充分理解本协议的全部内容，特别是以加粗形式提示的责任豁免、限制条款等。一旦勾选同意并完成登录/注册，即视为您已阅读、理解并同意接受本协议各项条款的约束。
        </p>
        <p className="mt-2 text-[13px] leading-[1.75] text-muted">
          您承诺所提供的账号信息真实、准确、完整、合法，并自行妥善保管账号及密码；因账号保管不善导致的损失由您自行承担。本平台按现状提供充值、短信群发等服务，不承诺服务的不间断性与及时性，法律法规另有强制性规定的除外。
        </p>
        <h4 className="mb-1.5 mt-4 text-[15px] font-bold">二、隐私政策</h4>
        <p className="text-[13px] leading-[1.75] text-muted">
          我们高度重视您的个人信息保护。本平台仅在为您提供服务所必需的范围内收集手机号、验证码、企业资质等必要信息，并采用加密等安全措施加以保护，不会在未经您授权的情况下向第三方披露，法律法规或监管部门另有要求的除外。
        </p>
        <p className="mt-2 text-[13px] leading-[1.75] text-muted">
          您有权查询、更正自己的个人信息，并可依法律规定要求删除。更多说明详见平台公示的完整版《用户协议》与《隐私政策》。
        </p>
        <p className="mt-3.5 text-[12px] text-muted-2">
          （本内容为原型演示文本，正式上线前请替换为经法务审核的正式条款。）
        </p>
      </div>
    </Modal>
  );
}
