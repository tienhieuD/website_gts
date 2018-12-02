from flask import render_template

from gts.app import app


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404_page.html'), 404


@app.route('/')
@app.route('/trang-chu')
def index():
    return render_template('index.html')


@app.route('/gioi-thieu')
def intro():
    return render_template('gioi-thieu.html')


@app.route('/thong-tin-tai-khoan/so-dia-chi')
def account_address_book():
    return render_template('account_address_book.html')


@app.route('/thong-tin-tai-khoan')
def account_info():
    return render_template('account_info.html')


@app.route('/thong-tin-tai-khoan/doi-mat-khau')
def account_info_change_pwd():
    return render_template('account_info_change_pwd.html')


@app.route('/thong-tin-tai-khoan/sua-thong-tin')
def account_info_edit_info():
    return render_template('account_info_edit_info.html')


@app.route('/lien-he')
def contact():
    return render_template('contact.html')


@app.route('/tin-tuc-san-pham')
def new_product():
    return render_template('new_product.html')


@app.route('/tin-tuc-chi-tiet')
def news_detail():
    return render_template('news_detail.html')


@app.route('/tin-tuc')
def news_list():
    return render_template('news_list.html')


@app.route('/dat-hang')
def order():
    return render_template('order.html')


@app.route('/dat-hang-don-hang')
def order_detail():
    return render_template('order_detail.html')


@app.route('/dat-hang-thanh-cong-bank')
def order_detail_success_bank():
    return render_template('order_detail_success_bank.html')


@app.route('/dat-hang-thanh-cong-tien-mat')
def order_detail_success_cash():
    return render_template('order_detail_success_cash.html')


@app.route('/lich-su-don-hang')
def order_history():
    return render_template('order_history.html')


@app.route('/lich-su-don-hang-chi-tiet')
def order_history_detail():
    return render_template('order_history_detail.html')


@app.route('/chi-tiet-san-pham')
def product_detail():
    return render_template('product_detail.html')


@app.route('/dang-ky-thanh-cong')
def signup_success():
    return render_template('signup-success.html')


@app.route('/ho-tro')
def support():
    return render_template('support.html')


@app.route('/backend_quotation')
def backend_quotation():
    from random import randint
    from datetime import datetime, timedelta
    quotation_ids = [(
        i,
        randint(1000000, 9999000),
        (datetime.now() + timedelta(randint(1, 10))).strftime('%d/%m/%Y %H:%M:%S'),
        ['Đã hoàn thành', 'Chờ xác nhận', 'Đã hủy'][randint(0, 2)],
        ['Nguyễn Văn Vui', 'Trần Khỏe', 'Phạm Thị Có Ích'][randint(0, 2)],
        ['2.500.000đ', '3.502.000đ', '1.590.000đ', '4.620.000đ', ][randint(0, 3)],
    ) for i in range(20)]
    return render_template('backend_quotation.html', quotation_ids=quotation_ids, total=randint(1000, 2000))


@app.route('/backend_quotation_detail')
def backend_quotation_detail():
    return render_template('backend_quotation_detail.html')


@app.route('/backend_product')
def backend_product():
    return render_template('backend_product.html')


@app.route('/backend_product_detail')
def backend_product_detail():
    return render_template('backend_product_detail.html')


@app.route('/backend_report')
def backend_report():
    return render_template('backend_report.html')
